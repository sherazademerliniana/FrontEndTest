import { StyledForm } from "../../styles/Form";
import { Input } from "../Input/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonStyled } from "../Button/style";

export const FormRegister = () => {

  const schema = yup.object().shape({
    amount: yup.number().required("Required field"),
    installments: yup.number().required("Required field"),
    mdr: yup.number().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });


  const onSubmit = async (data_user) => {
  
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full Name"
        placeholder="Maria da Silva"
        type="text"
        register={register}
        name="full_name"
        error={errors?.full_name?.message}
      />

      <Input
        label="Email"
        placeholder="Maria@hotmail.com"
        type="text"
        register={register}
        name="email"
        error={errors?.email?.message}
      />

      <Input
        label="Telephone"
        placeholder="991111111"
        type="text"
        register={register}
        name="telephone"
        error={errors?.telephone?.message}
      />
      <ButtonStyled
        backgroundcolor="var(--grey)"
        width="94%"
        padding=".3rem"
        type="submit"
        hover="var(--grey-2)"
        color="var(--grey-2)"
        hovercolor="var(--grey)"
      >
        Registrar
      </ButtonStyled>
    </StyledForm>
  );
};
