import { getLocaleMonthDateString } from "../utils";

interface CalenderDay {
    date: Date,
    intervals: IntervalState[]
}

enum IntervalState {
    clear = 0,
    work = 1,
    didWork = 2,
    didNotWork = 3,
    cursor = 4,
}

const getIntervalStateClass = (intState: IntervalState) => {
    switch(intState) {
        case IntervalState.clear: return 'clear';
        case IntervalState.work: return 'work';
        case IntervalState.didWork: return 'didWork';
        case IntervalState.didNotWork: return 'didNotWork';
        case IntervalState.cursor: return 'cursor';
        default: return 'clear';
    }
}

const makeIntervalHeaders = (days: CalenderDay[]) => {
    let headerRow = '';
    for(let j in days) {
        const day = getLocaleMonthDateString(days[j].date);
        headerRow += /*html*/`<th class="calenderheader">${day}</th>`;
    }
    return headerRow;
}

const htmlCalenderCell = (interval: IntervalState, intervalStateClass: string) => /*html*/`
    <td class="calender${intervalStateClass}">
        ${interval}
    </td>
`;

const makeIntervalColumn = (days: CalenderDay[], intervalIteration: number) => {
    let column = '';
    for(let i = 0; i < days.length; i++) {
        const interval = days[i].intervals[intervalIteration];
        const intervalStateClass = getIntervalStateClass(days[i].intervals[intervalIteration])
        column += /*html*/`
            <tr>${htmlCalenderCell(interval, intervalStateClass)}</tr>
        `;
    }
    return column;
}

const makeIntervalRows = (days: CalenderDay[]) => {
    let rows = '';
    for(let i = 0; i < days[0].intervals.length; i++) {
        rows += /*html*/`
            <tr>${makeIntervalColumn(days, i)}</tr>
        `;
    }
    return rows;
}

const makeIntervals = (days: CalenderDay[]) => {
    let intervals = '';
    intervals += makeIntervalHeaders(days);
    intervals += makeIntervalRows(days);
    return intervals;
}

const htmlCalender = (intervals: string) => /*html*/`
    <div id="calender">
        <table>${intervals}</table>
    </div>
`;

export const loadCalender = () => {

    const days: CalenderDay[] = [
        {date: new Date(Date.now() - 1000*60*60*24*1), intervals: [0, 2, 2, 2, 2, 2, 2, 0]},
        {date: new Date(Date.now()), intervals: [2, 2, 2, 4, 1, 1, 0, 0]},
        {date: new Date(Date.now() + 1000*60*60*24*1), intervals: [0, 1, 1, 1, 0, 0, 0, 0]},
        {date: new Date(Date.now() + 1000*60*60*24*2), intervals: [0, 0, 0, 1, 1, 1, 0, 0]},
        {date: new Date(Date.now() + 1000*60*60*24*3), intervals: [0, 0, 0, 0, 0, 0, 0, 0]},
        {date: new Date(Date.now() + 1000*60*60*24*4), intervals: [0, 0, 0, 0, 0, 0, 0, 0]},
        {date: new Date(Date.now() + 1000*60*60*24*5), intervals: [0, 0, 0, 0, 0, 0, 0, 0]}
    ];

    const intervals = makeIntervals(days);
    const html = htmlCalender(intervals);


    return html;
}
