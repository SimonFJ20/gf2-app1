
export const getLocaleMonthDateString = (date: Date) => {
    return date.toLocaleDateString().slice(0, -5);
}
