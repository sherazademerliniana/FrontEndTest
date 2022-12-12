import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";
import { StyledForm } from "./style";
import { useContext } from "react";
import { ChallengeContext } from "../../providers/Challenge";

export const FormPage = () => {
  const schema = yup.object().shape({
    amount: yup.number().required("Required Field"),
    installments: yup.number().required("Required Field"),
    mdr: yup.number().required("Required Field"),
  });

  const { postChallenge } = useContext(ChallengeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const resetInput = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };
  const onSubmit = async (data) => {
    await postChallenge(data);
    resetInput();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Informe o valor da venda *"
        placeholder=""
        type="number"
        register={register}
        name="amount"
        min="1000"
        error={errors?.amount?.message}
      />

      <Input
        label="Em quantas parcelas *"
        placeholder=""
        type="number"
        register={register}
        name="installments"
        min="1"
        max="12"
        error={errors?.installments?.message}
      />

      <Input
        label="Informe o percentual de MDR *"
        placeholder=""
        type="number"
        register={register}
        name="mdr"
        min="0"
        error={errors?.mdr?.message}
      />
      <ButtonStyled
        backgroundcolor="white"
        width="50%"
        padding=".3rem"
        type="submit"
        hover="black"
        color="black"
        hovercolor="white"
      >
        Enviar
      </ButtonStyled>
    </StyledForm>
  );
};
