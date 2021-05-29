import abbreviateFastener from './abbreviateFastener';

export default (fasteners) => {
    const csvData = [
        ["Fastener", "Description", "Quantity"]
    ];

    fasteners.forEach((fastener) => {
        const fastenerAbbreviation = abbreviateFastener(fastener);

        const { 
            thruHolePart='', threadedHolePart='', // Will not show if undefined
            partA='', partB='', // Will not show if undefined
            quantity 
        } = fastener;

        const data = [
            fastenerAbbreviation,
            `${thruHolePart}${partA} - ${threadedHolePart}${partB}`,
            quantity
        ]

        csvData.push(data)
    });

    return csvData;
}