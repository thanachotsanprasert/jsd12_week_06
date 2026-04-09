// 1. Base Class (The Blueprint for a single task)
class Ticket {
  constructor(id, title, assignee) {
    this.id = id;
    this.title = title;
    this.assignee = assignee;
    this._status = "Open"; // Internal state (protected by _)
  }

  // Same as getStatus() in the Animal class
  getStatus() {
    return this._status;
  }

  // Same as makeSound() - just prints basic info
  printDetails() {
    console.log(
      `[ID: ${this.id}] ${this.title} | Assigned to: ${this.assignee}`,
    );
  }

  // Same as eat() - it modifies the internal state
  resolveTask() {
    this._status = "Resolved";
    console.log(`✅ Ticket #${this.id} is now Resolved!`);
  }
}

// 2. Manager Class (To hold and run our ticket objects)
class TicketBoard {
  constructor(boardName) {
    this.boardName = boardName;
    this.tickets = []; // The array to hold our tickets (formerly this.animals)
  }

  // Same as addAnimal()
  addTicket(ticket) {
    this.tickets.push(ticket);
    console.log(`➕ Added Ticket #${ticket.id} to the ${this.boardName}`);
  }

  // Same as showAllAnimals()
  renderDashboard() {
    console.log(`\n=== 📊 Dashboard: ${this.boardName} ===`);

    this.tickets.forEach((ticket) => {
      // Accessing properties and calling methods
      ticket.printDetails();
      console.log(`Current Status: ${ticket.getStatus()}`);

      // Simulating action: let's resolve the task!
      ticket.resolveTask();
      console.log("-------------------------");
    });
  }
}

// 3. Execution (Bringing the system to life)

// Create the Manager (formerly new Zoo)
const sprintBoard = new TicketBoard("Weekly Sprint Board");

// Create instances of the Ticket (formerly new Animal)
const loginBug = new Ticket(101, "User cannot log in", "Alice");
const uiTask = new Ticket(102, "Change button color to blue", "Bob");

// Add the tickets to the manager (formerly addAnimal)
sprintBoard.addTicket(loginBug);
sprintBoard.addTicket(uiTask);

// Display the whole system (formerly showAllAnimals)
sprintBoard.renderDashboard();
