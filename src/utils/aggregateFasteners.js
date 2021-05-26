import abbreviateFastener from './abbreviateFastener';

export default (fasteners) => {
    const csvData = [
        ["Name", "Description", "Quantity"]
    ];

    fasteners.forEach((fastener) => {
        const fastenerName = abbreviateFastener(fastener);
        const data = [
            fastenerName,
            `${fastener.thruHolePart} - ${fastener.threadedHolePart}`,
            fastener.quantity
        ]
        csvData.push(data)
    });

    return csvData;
}