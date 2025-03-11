import CustomButton from "@/components/common/Button";
import CardItem from "@/components/common/CardItem";
import CenteredLayout from "@/components/layout/CenteredLayout";

export default function Home() {
  return (
    <div>
      <CenteredLayout title="Escolha o seu presente! 🎁">
        <CustomButton onClick={() => alert("Botão clicado!")} variant="secondary">
          Clique aqui
        </CustomButton>
        <CardItem 
          name="Camiseta"
          image="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg"

        />
      </CenteredLayout>
    </div>
  );
}
