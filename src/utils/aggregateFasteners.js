import abbreviateFastener from './abbreviateFastener';
import { 
    screwHeadType, screwDriveType,
    screwMaterial
} from '../utils/fastenerDatabase';

export default (fasteners) => {
    const csvData = [
        ["Fastener", "Description", "Members", "Quantity"]
    ];

    fasteners.forEach((fastener) => {
        const fastenerAbbreviation = abbreviateFastener(fastener);

        const { 
            headType = '', driveType = '',
            material = '',
            thruHolePart='', threadedHolePart='', // Will not show if undefined
            partA='', partB='', // Will not show if undefined
            quantity = 0
        } = fastener;

        const data = headType ? [
            fastenerAbbreviation,
            `${screwHeadType[headType]} - ${screwDriveType[driveType]}
             - ${screwMaterial[material]}`,
            `${thruHolePart}${partA} - ${threadedHolePart}${partB}`,
            quantity
        ] : [
            fastenerAbbreviation,
            ``,
            `${thruHolePart}${partA} - ${threadedHolePart}${partB}`,
            quantity
        ]

        csvData.push(data)
    });

    return csvData;
}