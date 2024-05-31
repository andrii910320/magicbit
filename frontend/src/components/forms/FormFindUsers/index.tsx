import { FC, useState, useEffect } from "react";
import { IFindUserRes } from "../../../constants/interface";
import Processing from "../../Processing";
import ShowFoundUser from "../../ShowFoundUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import "./index.css";
import { FindUseSchema } from "../../../validation/findUserSchema";
import { handleNumberChange } from "../../../helpers/addMaskToNumber";
import axios from "axios";

let cancelToken: any;
export const FormFindUser: FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFindUserRes>({
    resolver: yupResolver(FindUseSchema),
    mode: "all",
  });
  const zeroUser = {
    email: "",
    number: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IFindUserRes>(zeroUser);

  console.log(cancelToken);
  const onSubmit: SubmitHandler<IFindUserRes> = async (data) => {
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }

    const { email, number } = data;
    setIsLoading(true);

    try {
      cancelToken = axios.CancelToken.source();
      setResponse(zeroUser);
      const res = await axios.get(
        `http://localhost:8888/users?email=${email}&number=${number}`,
        { cancelToken: cancelToken.token }
      );
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      setResponse(zeroUser);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="test el">
        <input
          {...register("email")}
          name="email"
          type="text"
          placeholder="Email"
          className=" el"
        />
        {errors.email?.message && (
          <p className="error">{errors.email?.message}</p>
        )}
        <input
          {...register("number")}
          // name="number"
          type="text"
          placeholder="Number(optional)"
          className=" el"
          onChange={(e) => handleNumberChange(e, setValue)}
        />
        {errors.number?.message && (
          <p className="error">{errors.number?.message}</p>
        )}
        <button type="submit" className=" el">
          {" "}
          Find User
        </button>
      </form>
      {isLoading && <Processing />}
      {response.email?.length > 0 && (
        <ShowFoundUser email={response.email} number={response.number} />
      )}
    </div>
  );
};
