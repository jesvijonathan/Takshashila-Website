# Python3 implementation of the approach
 
# Function to return the minimum cost to
# travel from the first city to the last

def minCost(cost, n):
 

    # To store the total cost

    totalCost = 0
 

    # Start from the first city

    boardingBus = 0
 

    for i in range(1, n):
 

        # If found any city with cost less than

        # that of the previous boarded

        # bus then change the bus

        if (cost[boardingBus] > cost[i]):
 

            # Calculate the cost to travel from

            # the currently boarded bus

            # till the current city

            totalCost += ((i - boardingBus) *

                          cost[boardingBus])
 

            # Update the currently boarded bus

            boardingBus = i
 

    # Finally calculate the cost for the

    # last boarding bus till the (N + 1)th city

    totalCost += ((n - boardingBus) *

                  cost[boardingBus])

    return totalCost
 
# Driver code

cost = [ 4, 7, 8, 3, 4]

n = len(cost)
 

print(minCost(cost, n))
 Try this