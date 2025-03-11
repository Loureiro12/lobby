import CustomButton from "@/components/common/Button";

export default function Home() {
  return (
    <div>
      <CustomButton onClick={() => alert("Botão clicado!")}>
        Clique aqui
      </CustomButton>
    </div>
  );
}
