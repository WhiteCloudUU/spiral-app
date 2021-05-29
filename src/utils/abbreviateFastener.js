import { screwPitch } from '../utils/fastenerDatabase';

export default (fastener) => {
    if (fastener.type === "screw") {
        const {   
            size,
            length,
            headType,
            driveType,
            material
        } = fastener;
    
        const pitch = screwPitch[size];

        return `M${size}-${pitch} x ${length}_${headType}${driveType}_${material}`;

    } else if (fastener.type === "pin") {

        const {   
            size,
            length,
        } = fastener;

        return `Dia.${size}_Lg.${length}`;
    }
    

}