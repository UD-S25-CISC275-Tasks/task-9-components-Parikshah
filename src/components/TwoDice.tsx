import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(() => {
        let first = d6();
        let second = d6();
        while (first === second) {
            second = d6();
        }
        return first;
    });
    const [rightDie, setRightDie] = useState<number>(d6);

    function getResultMessage(): string | null {
        if (leftDie === rightDie) {
            return leftDie === 1 ? "You Lose!" : "You Win!";
        }
        return null;
    }

    return (
        <div>
            <span data-testid="left-die">🎲 {leftDie}</span>
            <span data-testid="right-die"> 🎲 {rightDie}</span>
            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6);
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRightDie(d6);
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {getResultMessage() && <p>{getResultMessage()}</p>}
        </div>
    );
}
