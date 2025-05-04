import numpy as np


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def relu(x):
    return np.maximum(0, x)


def relu_derivative(x):
    return (x > 0).astype(float)


def forward_pass(X, W1, b1, W2, b2):
    Z1 = np.dot(X, W1) + b1  
    A1 = relu(Z1)  
    Z2 = np.dot(A1, W2) + b2  
    A2 = sigmoid(Z2)  
    return Z1, A1, Z2, A2


def compute_loss(y, y_pred):
    m = y.shape[0]
    return -(1/m) * np.sum(y * np.log(y_pred + 1e-8) + (1 - y) * np.log(1 - y_pred + 1e-8))


def backward_pass(X, y, Z1, A1, A2, W1, W2, learning_rate):
    m = X.shape[0]

    # Compute gradients
    dZ2 = A2 - y  # Derivative of loss with respect to A2
    dW2 = (1/m) * np.dot(A1.T, dZ2)
    db2 = (1/m) * np.sum(dZ2, axis=0)

    dA1 = np.dot(dZ2, W2.T)  # Backprop through output layer
    dZ1 = dA1 * relu_derivative(Z1)  # Backprop through ReLU
    dW1 = (1/m) * np.dot(X.T, dZ1)
    db1 = (1/m) * np.sum(dZ1, axis=0)

    # Update weights
    W1 -= learning_rate * dW1
    W2 -= learning_rate * dW2
    b1 -= learning_rate * db1
    b2 -= learning_rate * db2

    return W1, b1, W2, b2

# -------------------------------
# Generate dummy data for training
# -------------------------------
np.random.seed(42)
num_samples = 200
num_features = 2  # Example: x, y coordinates of a figure
hidden_neurons = 4

# Random input data (x, y)
X_train = np.random.randn(num_samples, num_features)
# Labels (0 or 1) based on a simple function (for testing)
y_train = (X_train[:, 0]**2 + X_train[:, 1]**2 < 1).astype(int).reshape(-1, 1)

# -------------------------------
# Initialize neural network parameters
# -------------------------------
W1 = np.random.randn(num_features, hidden_neurons) * 0.01
b1 = np.zeros((1, hidden_neurons))
W2 = np.random.randn(hidden_neurons, 1) * 0.01
b2 = np.zeros((1, 1))

# -------------------------------
# Train the neural network
# -------------------------------
learning_rate = 0.1
iterations = 1000

for i in range(iterations):
    # Forward pass
    Z1, A1, Z2, A2 = forward_pass(X_train, W1, b1, W2, b2)
    
    # Compute loss
    loss = compute_loss(y_train, A2)
    
    # Backpropagation
    W1, b1, W2, b2 = backward_pass(X_train, y_train, Z1, A1, A2, W1, W2, learning_rate)

    # Print loss every 100 iterations
    if i % 100 == 0:
        print(f"Iteration {i}: Loss = {loss:.4f}")

# -------------------------------
# Test the model on new data
# -------------------------------
X_test = np.array([[0.5, 0.5], [-1.5, 1.2], [1.5, -1.5]])  # Test samples
_, _, _, A2_test = forward_pass(X_test, W1, b1, W2, b2)

# Print predictions (rounded to 0 or 1)
predictions = (A2_test > 0.5).astype(int)
print("\nPredictions:")
print(predictions)
