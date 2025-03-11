import CustomButton from "@/components/common/Button";
import CenteredLayout from "@/components/layout/CenteredLayout";

export default function Home() {
  return (
    <div>
      <CenteredLayout title="Escolha o seu presente! 🎁">
        <CustomButton onClick={() => alert("Botão clicado!")} variant="secondary">
          Clique aqui
        </CustomButton>
      </CenteredLayout>
    </div>
  );
}
