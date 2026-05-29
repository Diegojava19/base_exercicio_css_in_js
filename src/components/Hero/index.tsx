<<<<<<< HEAD
import { Container } from '../../styles'
import { Formulario, FormTitle } from './styles'

const Hero = () => (
  <Formulario>
    <Container>
      <FormTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </FormTitle>
    </Container>
  </Formulario>
=======
import styles from './Hero.module.css'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </form>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
)

export default Hero
