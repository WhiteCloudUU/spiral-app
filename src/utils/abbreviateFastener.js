import { fastenerMetricSize } from '../utils/fastenerDatabase';

export default (fastener) => {
    const {   
        size,
        length,
        headType,
        driveType,
        material
    } = fastener;

    const pitch = fastenerMetricSize[size];

    return `M${size}x${pitch}-${length}_${headType}${driveType}_${material}`;
}