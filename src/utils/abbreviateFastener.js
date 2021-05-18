export default (fastener, type) => {
    const {   
        size,
        length,
        headType,
        driveType,
        material
    } = fastener;

    return `${type}-M${size}x${length}_${headType}${driveType}_${material}`;
}