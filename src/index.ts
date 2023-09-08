import { IAssignments, IAssignmentsChild } from "./interfaces/IAssignments";

const mime = () => {
  const assignments: IAssignments = {
    "424d": { extension: "bmp", "content-type": "image/bmp" },
    "53494d504c45": { extension: "fits", "content-type": "application/fits" },
    "47494638": { extension: "gif", "content-type": "image/gif" },
    "474b534d": { extension: "gks", "content-type": "application/gks" },
    "01da": { extension: "rgb", "content-type": "application/rgb" },
    f10040bb: { extension: "itc", "content-type": "application/itc" },
    ffd8ffe0: { extension: "jpg", "content-type": "image/jpeg" },
    "49494e31": { extension: "nif", "content-type": "application/nif" },
    "56494557": { extension: "pm", "content-type": "application/pm" },
    "89504e47": { extension: "png", "content-type": "image/png" },
    "2521": { extension: "ps", "content-type": "application/postscript" },
    "59a66a95": { extension: "ras", "content-type": "image/ras" },
    "4d4d002a": { extension: "tif", "content-type": "image/tiff" },
    "49492a00": { extension: "tif", "content-type": "image/tiff" },
    "67696d70207863662076": {
      extension: "xcf",
      "content-type": "application/xcf",
    },
    "23464947": { extension: "fig", "content-type": "application/fig" },
    "2f2a2058504d202a2f": { extension: "xpm", "content-type": "image/xpm" },
    "425a": { extension: "bz", "content-type": "application/bzip" },
    "1f9d": { extension: "Z", "content-type": "" },
    "1f8b": { extension: "gz", "content-type": "application/gzip" },
    "504b0304": { extension: "zip", "content-type": "application/zip" },
    "7573746172": { extension: "tar", "content-type": "application/tar" },
    "4d5a": { extension: "exe", "content-type": "application/x-msdownload" },
    "7f454c46": {
      extension: "elf",
      "content-type": "application/x-executable",
    },
    "9900": { extension: "pgp", "content-type": "application/pgp" },
    "9501": { extension: "pgp", "content-type": "application/pgp" },
    "9500": { extension: "pgp", "content-type": "application/pgp" },
    a600: { extension: "pgp", "content-type": "application/pgp-encrypted" },
  };

  const keys: string[] = Object.keys(assignments);

  const convertToHex = (data: string): string => {
    const byteArray: Uint8Array = new Uint8Array(data.length);

    for (let index: number = 0; index < data.length; index++) {
      byteArray[index] = data.charCodeAt(index);
    }

    const hexadecimalString: string = Array.from(byteArray)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hexadecimalString;
  };

  const getAssignment = (data: string): IAssignmentsChild | boolean => {
    const hexadecimalString: string = convertToHex(data);

    for (let index: number = 0; index < keys.length; index++) {
      if (hexadecimalString.includes(keys[index])) {
        return { ...assignments[keys[index]] };
      }
    }
    return false;
  };

  const getAssignmentByExtension = (
    extension: string
  ): IAssignmentsChild | boolean => {
    for (let index: number = 0; index < keys.length; index++) {
      if (extension === assignments[keys[index]].extension) {
        return { ...assignments[keys[index]] };
      }
    }
    return false;
  };

  return { getAssignment, getAssignmentByExtension };
};

export default mime;
