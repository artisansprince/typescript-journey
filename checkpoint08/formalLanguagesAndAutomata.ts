// Formal Languages and Automata

//Simple Finite State Machine (FSM)
class FSM {
    state: string;
    transitions: { [key: string]: { [key: string]: string } };
  
    constructor(initialState: string, transitions: { [key: string]: { [key: string]: string } }) {
      this.state = initialState;
      this.transitions = transitions;
    }
  
    transition(symbol: string): void {
      const nextState = this.transitions[this.state][symbol];
      if (nextState) {
        this.state = nextState;
        console.log(`Moved to state: ${this.state}`);
      } else {
        console.log(`No transition found for symbol: ${symbol}`);
      }
    }
  }
  
  const fsmTransitions = {
    "A": { "0": "B", "1": "A" },
    "B": { "0": "A", "1": "B" }
  };
  
  const fsm = new FSM("A", fsmTransitions);
  fsm.transition("0"); // Output: Moved to state: B
  fsm.transition("1"); // Output: Moved to state: B
  fsm.transition("0"); // Output: Moved to state: A
  