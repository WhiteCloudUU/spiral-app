import abbreviateFastener from './abbreviateFastener';

export default (fasteners) => {
    const csvData = [
        ["Fastener", "Description", "Quantity"]
    ];

    fasteners.forEach((fastener) => {
        const fastenerAbbreviation = abbreviateFastener(fastener);

        const { 
            thruHolePart='', threadedHolePart='', // Undefined will not show
            partA='', partB='', // Undefine will not show
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