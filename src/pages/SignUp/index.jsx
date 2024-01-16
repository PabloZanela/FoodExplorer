import { Container, Brand, Form } from './styles'

import { Section } from '../../components/Section';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import brand from "../../assets/brand.svg";

export function SignUp() {
  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo" />
      </Brand>

      <Form>
        <h2>
          Faça seu login
        </h2>
        <Section title="Seu nome">
          <Input placeholder="Exemplo: Maria da Silva"/>
        </Section>

        <Section title="Email">
          <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </Section>

        <Section title="Senha">
          <Input placeholder="No mínimo 6 caracteres"/>  
        </Section>
      
        <Button>Criar conta</Button>


      <a href="">Já tenho uma conta</a>

      </Form>
      
    </Container>
  )
}