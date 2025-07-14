import { Request, Response} from "express";

function getCurrentUserDetails(
  _req: Request,
  res: Response,
) {
  const data = res.locals.user;
  if(data) res.status(200).json(data);
  else res.status(400).json({message: "Request Failed: Data not found!!"})
}
export default getCurrentUserDetails;
