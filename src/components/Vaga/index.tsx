<<<<<<< HEAD
// import styles from './Vaga.module.css'
import { VagaLi, VagaLink, VagaTitulo } from './styles'
=======
import styles from './Vaga.module.css'
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
<<<<<<< HEAD
  <VagaLi>
    <VagaTitulo>{props.titulo}</VagaTitulo>
=======
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
<<<<<<< HEAD
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaLi>
=======
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
)

export default Vaga
