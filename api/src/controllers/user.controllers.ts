import db from "../database/models";
import { LoginUser, noIdUserModel, UserModel } from "../../types";
import { encrypt, verified } from "../utils/password.handler";
import { generateToken } from "../utils/jwt.handler";

export const userGet = async ():Promise<Array<UserModel>> => {
  return await db.User.findAll();
};
export const usetIdGet = async ({ id }: any): Promise<UserModel> => {
  return db.User.findOne({
    where: { id }
  })
}

export const registerUser = async ({ firstName, lastName, email, phone, password }: noIdUserModel): Promise<UserModel> => {
  const checkUser = await db.User.findOne({
    where: { email: email },
  });
  if (checkUser) throw new Error("ALREADY_USER");

  const passHash = await encrypt(password);

  const registerNewUser = await db.User.create({ firstName, lastName, email, phone, password: passHash });
  return registerNewUser;
};
export const loginUser = async ({ email, password }: LoginUser) => {
  const checkIs = await db.User.findOne({
    where: { email },
  });
  if (!checkIs) throw new Error("NOT_FOUND_USER");

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) throw new Error("NOT_FOUND_USER")

	const token = generateToken(checkIs.id)

	const data = {
		token,
		user: checkIs
	}
  return data;
};

export const userPut = async ( id :string, firstName:string, lastName: string, phone: number ): Promise<UserModel> => {
  const checkUser = await db.User.findOne({
    where: { id }
  })
  if(firstName) checkUser.firstName = firstName
  if(lastName) checkUser.lastName = lastName
  if(phone) checkUser.phone = phone
  const updateUser = await checkUser.save()

  return updateUser
};

export const userDelete = async ({ id }: any): Promise<UserModel> => {
  return await db.User.destroy({
    where: {
      id: id,
    },
  });
};
