import bcrypt from "bcrypt";
const saltRounds = 10;

export const encrypt = (plainText: string) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(plainText, salt, function (err, hash) {
      console.log(hash);
    });
  });
};

export const compare = (plainText: string, hash: string) => {
  bcrypt.compare(plainText, hash, function (err, result) {
    return result;
  });
};

export const responseJSON = (event: any, status: number, data: any) => {
  setResponseStatus(event, status);
  return data;
};
