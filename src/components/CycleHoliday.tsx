import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    IndependenceDay = "🎆",
    NewYear = "🎉",
    Thanksgiving = "🦃",
}

const alphabetOrder = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.IndependenceDay,
    Holiday.NewYear,
    Holiday.Thanksgiving,
];

const yearOrder = [
    Holiday.NewYear, // January 1st
    Holiday.IndependenceDay, // July 4th
    Holiday.Halloween, // October 31st
    Holiday.Thanksgiving, // November (4th Thursday)
    Holiday.Christmas, // December 25th
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.NewYear,
    );

    function getNextHolidayAlphabetically(holiday: Holiday): Holiday {
        const index = alphabetOrder.indexOf(holiday);
        return alphabetOrder[(index + 1) % alphabetOrder.length];
    }

    function getNextHolidayByYear(holiday: Holiday): Holiday {
        const index = yearOrder.indexOf(holiday);
        return yearOrder[(index + 1) % yearOrder.length];
    }

    return (
        <div>
            <h3>Holiday: {currentHoliday}</h3>
            <Button
                onClick={() => {
                    setCurrentHoliday(
                        getNextHolidayAlphabetically(currentHoliday),
                    );
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setCurrentHoliday(getNextHolidayByYear(currentHoliday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
