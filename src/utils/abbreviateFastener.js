import { fastenerPitch } from '../utils/fastenerDatabase';

export default (fastener) => {
    const {   
        size,
        length,
        headType,
        driveType,
        material
    } = fastener;

    const pitch = fastenerPitch[size];

    return `M${size}x${pitch}-${length}_${headType}${driveType}_${material}`;
}