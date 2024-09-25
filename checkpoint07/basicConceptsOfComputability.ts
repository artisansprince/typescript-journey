// Basic Concepts of Computability

class TuringMachine {
    tape: string[]; // The tape of the Turing machine
    head: number; // The position of the head on the tape
    state: string; // The current state of the Turing machine
    rules: { [key: string]: { [key: string]: [string, string, string] } }; // Transition rules

    constructor(tape: string[], rules: { [key: string]: { [key: string]: [string, string, string] } }) {
        this.tape = tape; // Initialize tape with input
        this.head = 0; // Start the head at the beginning of the tape
        this.state = "q0"; // Initial state
        this.rules = rules; // Set transition rules
    }

    // Performs a single step of the Turing machine
    step(): boolean {
        const symbol = this.tape[this.head]; // Read the current symbol under the head
        const rule = this.rules[this.state][symbol]; // Get the transition rule for the current state and symbol
        if (!rule) return false; // If no rule exists, halt the machine

        this.tape[this.head] = rule[1]; // Write the new symbol to the tape
        this.head += rule[2] === "R" ? 1 : -1; // Move the head left or right based on the rule
        this.state = rule[0]; // Transition to the next state

        return true; // Continue running
    }

    // Runs the Turing machine until it halts
    run(): void {
        while (this.step()) {
            console.log(`Tape: ${this.tape.join('')}, Head: ${this.head}, State: ${this.state}`); // Output current status
        }
    }
}

// Example tape and rules for the Turing machine
const tape = ["1", "1", "1", "0", "0"]; // Input tape
const rules: { [key: string]: { [key: string]: [string, string, string] } } = {
    q0: { "1": ["q0", "1", "R"], "0": ["q1", "1", "L"] }, // Rules for state q0
    q1: { "1": ["q1", "1", "L"], "0": ["q2", "0", "R"] }  // Rules for state q1
};

const tm = new TuringMachine(tape, rules); // Create a new Turing machine instance
tm.run(); // Run the Turing machine simulation
