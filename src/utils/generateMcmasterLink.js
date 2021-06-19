import { 
    screwHeadType, screwDriveType,
    screwMaterial
  } from '../utils/fastenerDatabase';

export default (size, length, headType, driveType) => {
    const head = screwHeadType[headType].split(' ')[0].toLowerCase();
    const drive = screwDriveType[driveType].toLowerCase();

    const link = 
        "https://www.mcmaster.com/screws/system-of-measurement~metric/"
        +
        `thread-size~m${size}`
        +
        `/length~${length}-mm/`
        +
        `head-type~${head}/`
        +
        `drive-style~${drive}/`
        ;
    return link
}

// Example
/*
https://www.mcmaster.com/screws/system-of-measurement~metric/
    length~5-mm/thread-size~m2/material~steel/drive-style~hex/head-type~socket/
*/