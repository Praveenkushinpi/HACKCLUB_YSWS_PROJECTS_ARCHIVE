extends Node2D

@export var balloon_color: Color = Color.WHITE  # Default color
@export var rise_speed: float = 100.0  # Speed at which balloon rises
@export var can_pop: bool = true  # If true, balloon can be popped
@export var pop_radius: float = 50.0  # Radius to check for nearby balloons

var is_popped: bool = false

@onready var sprite: Sprite2D = $Sprite2D
@onready var collision: CollisionShape2D = $CollisionShape2D

func _ready():
	set_balloon_color()
	start_rising()

# Set the balloon's color based on its type
func set_balloon_color():
	if sprite:
		sprite.self_modulate = balloon_color

# Animate the balloon rising to its set position
func start_rising():
	var target_position = position
	position.y += 200  # Start from below the actual position
	var tween = create_tween()
	tween.tween_property(self, "position", target_position, 1.5).set_trans(Tween.TRANS_SINE).set_ease(Tween.EASE_OUT)

# Handle collision with an arrow
func on_arrow_hit(arrow_color: Color):
	if !can_pop or is_popped:
		return

	if arrow_color == balloon_color:  # Match colors to pop
		pop()
	else:
		reject_arrow()  # If colors don’t match, ignore

# Pop the balloon
func pop():
	if is_popped:
		return

	is_popped = true
	# Trigger particle effects (if you add them)
	# Spawn sound effects (if needed)
	
	check_for_nearby_balloons()
	queue_free()  # Remove balloon

# If the balloon doesn't match, reject the arrow
func reject_arrow():
	print("Arrow rejected by balloon of different color!")

# Check for nearby balloons to pop
func check_for_nearby_balloons():
	var overlapping_balloons = get_tree().get_nodes_in_group("balloons")
	
	for balloon in overlapping_balloons:
		if balloon != self and balloon.position.distance_to(position) <= pop_radius:
			if balloon.balloon_color == balloon_color:
				balloon.pop()  # Chain reaction pop

# Add balloon to "balloons" group
func _enter_tree():
	add_to_group("balloons")
