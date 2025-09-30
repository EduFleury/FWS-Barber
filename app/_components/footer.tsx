import { Card, CardContent } from "./ui/card";

const Footer = () =>{

    return (
      <footer>
        <Card className="py-6 px-5">
          <CardContent className="text-sm text-gray font-bold">
              © {new Date().getFullYear()} Barbearia Estilo — Todos os direitos reservados.
          </CardContent>
        </Card>
      </footer>
    )
}

export default Footer;