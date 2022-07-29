import React from "react";
import styled from "styled-components";

const Temp5Page = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <p>
            <h1>¿Preparados para la T5?</h1>
          </p>
        </article>

        <article>
          <p>
            Como siempre hemos preparado un maravilloso Handbook explicando
            todos y cada uno de los detalles del sistema de competición.
          </p>
          <p>
            <a
              href="https://docs.google.com/document/d/1Ke2XnHp1fUVNx5ykehunuPAZw5NqVEHq/edit?usp=sharing&ouid=101891344918082115048&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              Handbook T5
            </a>
          </p>
          <p>
            Pero seamos sinceros, algunos no somos capaces de aprendernos un
            build order, así que vamos resumiros alguno de las novedades y
            highlights de la T5 (eso si su no-lectura no exime de su
            cumplimento).
          </p>
        </article>

        <article>
          <div className="title">
            <h4>Pool de mapas</h4>
            <div className="underline"></div>
          </div>
          <div>
            <a
              href="https://www.ageofempires.com/mods/details/95480/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/map_pool_t5.png"
                alt="pool mapas"
              />
            </a>
          </div>
          <div className="infoBox">
            Instala el mod{" "}
            <a
              href="https://www.ageofempires.com/mods/details/95480/"
              target="_blank"
              rel="noreferrer"
            >
              [LEA] LigaEspanola
            </a>{" "}
            para disponer de todos los mapas. Es <u>OBLIGATORIO</u> jugar con
            los mapas del mod.
          </div>
          <div>
            <p>
              Los mapas utilizados para la liga son en general mapas clásicos
              que ya incluye el juego, a excepción de{" "}
              <a
                href="https://liquipedia.net/ageofempires/Bypass"
                target="_blank"
                rel="noreferrer"
              >
                ByPass
              </a>{" "}
              que es un mapa creado por Chrazini y T90 para la Hidden Map 4.
            </p>
            <p>
              Los admin de la Liga Española hemos decidido probar e introducir
              nuevos mapas menos comunes, pero siempre manteniendo la esencia
              del pool de mapas, es decir, disponer de opciones para que todos
              los jugadores disfruten:
            </p>
            <ul>
              <li>Arabia</li>
              <li>1 mapa abierto (Haboob)</li>
              <li>1 mapa cerrado (Bypass)</li>
              <li>1 mapa de agua (Team Islands)</li>
              <li>1 mapa nómada (African Clearance)</li>
              <li>1 mapa mixto (4 lakes)</li>
              <li>1 mapa 😈 (hamburguer)</li>
            </ul>
          </div>
        </article>

        <article>
          <div className="title">
            <h4>Map pick</h4>
            <div className="underline"></div>
          </div>
          <div>
            <p>
              ¿Cansado de ver Arabia siempre de opener? ¿Harto de que te baneen
              siempre tu mapa favorito?
            </p>
            <p className="highlightMessage">
              Esta temporada cambia completamente el pick de mapas!!
            </p>
            <p>
              Cada uno escogerá libremente su HM y se irán baneando todos los
              mapas del pool hasta que solo quede 1.
            </p>
            <img
              src="https://alexocampos.github.io/liga-espanhola-aoe2-static/draft/web_map_pick.png"
              alt="pick mapas"
              className="picks_explanation"
            />
            <p>
              <a
                href="https://aoe2cm.net/preset/XQmqK"
                target="_blank"
                rel="noreferrer"
              >
                Pick de mapas
              </a>
            </p>
            <p>
              Primero se jugarán los HM de los 2 jugadores y como tercera
              partida se jugará el último mapa en ser elegido en el pick.
            </p>
          </div>
        </article>

        <article>
          <div className="title">
            <h4>Civ pick</h4>
            <div className="underline"></div>
          </div>
          <div>
            <p>
              A Verlock se le olvidó traer ☕ y decidimos no inventar nada
              extraño para el pick de civilizaciones, así que seguiremos con el
              mismo formato de la T4 que creemos que gustó a todo el mundo.
            </p>
            <img
              src="https://alexocampos.github.io/liga-espanhola-aoe2-static/draft/web_civ_pick.png"
              alt="pick civis"
              className="picks_explanation"
            />
            <p>
              <a
                href="https://www.aoe2cm.net/preset/ahTRl"
                target="_blank"
                rel="noreferrer"
              >
                Pick de civis
              </a>
            </p>
          </div>
        </article>

        <article>
          <div className="title">
            <h4>Divisiones y Calendario</h4>
            <div className="underline"></div>
          </div>
          <div>
            <p>
              Seguimos buscando fórmulas para mejorar la competición y en esta
              temporada vamos a hacer un cambio grande. En lugar del clásico
              Sistema Suizo, vamos a optar por hacer{" "}
              <b>
                divisiones + pequeñas de 8 jugadores y jugar todos contra todos
              </b>
              .
            </p>
            <p>
              El problema principal siempre han sido los AW que en ocasiones
              toca dar. Aunque sabemos que es muy difícil evitarlos, por lo
              menos intentaremos reducirlos. Con este nuevo sistema y dando más
              margen (15 días, salvo la jornada 7 que será solo 7 días) para
              jugar cada jornada, creemos que se reducirán drásticamente.
            </p>
            <p>¿CÓMO? ¿CÓMO? ¿CÓMO?</p>
            <p>
              Seguro que te has perdido en esta última parte ¿a que sí?
              Tranquilo, te lo vamos a explicar querido lector.
            </p>
            <div className="calendar">
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_1.png"
                alt="jornada 1"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_2.png"
                alt="jornada 2"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_3.png"
                alt="jornada 3"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_4.png"
                alt="jornada 4"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_5.png"
                alt="jornada 5"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_6.png"
                alt="jornada 6"
              />
              <img
                src="https://alexocampos.github.io/liga-espanhola-aoe2-static/calendar/jornada_7.png"
                alt="jornada 7"
              />
            </div>
            <p>
              Oh! Perfecto! Podré jugar todas mis partidas la primera semana!
            </p>
            <p>
              Lo siento, pero no.{" "}
              <u>
                Iremos revelando tu próximo rival el día que arranca cada
                jornada.
              </u>
            </p>
            <p>
              Por último, comentar que las divisiones hasta que cerremos las
              inscripciones todavía no sabemos cuantas habrá así que nos toca
              esperar hasta que terminen las inscripciones.
            </p>
          </div>
        </article>

        <article>
          <div className="title">
            <h4>Otras normas</h4>
            <div className="underline"></div>
          </div>
          <div>
            Por lo demás, no hay mucha cosa muy novedosa. Hemos retocado algunas
            normas un poquillo para castigar a los tramposos o los jugadores
            poco deportivos (alguno propuso utilizar un golpe de remo, pero
            nuestros abogados nos lo desaconsejaron).
          </div>
          <div>
            <p>
              Desde la organización esperamos que disfrutes la temporada, lo
              pases bien y conozcas los maravillosos seres humanos que formamos
              esta comunidad.
            </p>
            <p>
              Estamos poniendo nuestro máximo esfuerzo en intentar que todos los
              jugadores lo paséis bien.
            </p>
            <p>(en serio, estaría fantástico que te leyeras el Handbook)</p>
            <p>
              <a
                href="https://docs.google.com/document/d/1Ke2XnHp1fUVNx5ykehunuPAZw5NqVEHq/edit?usp=sharing&ouid=101891344918082115048&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
              >
                Handbook T5
              </a>
            </p>
            <p className="highlightMessage" style={{ marginTop: "4rem" }}>
              Besis hermos@s! 😘😘
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .calendar {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 3rem;
    img {
      width: auto;
      height: fit-content;
      margin-right: 2rem;
      margin-top: 2rem;
    }
  }

  a {
    color: var(--clr-primary-light-4);
  }

  a:hover {
    color: var(--clr-primary-light-2);
  }

  article {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .infoBox {
    background-color: var(--clr-primary);
    padding: 2rem;
    margin-bottom: 2rem;

    a {
      color: var(--clr-black);
      font-weight: bold;
    }
  }

  ul {
    list-style-type: square;
    padding-left: 3rem;
  }

  .title {
    text-align: left;
    margin-bottom: 2rem;
  }

  .underline {
    margin-left: 0;
  }

  h1 {
    text-align: center;
    margin-bottom: 5rem;
    font-family: "True Lies", sans-serif;
    color: var(--clr-violet);
    text-shadow: -3px 0 var(--clr-grey-1), 0 3px var(--clr-grey-1),
      3px 0 var(--clr-grey-1), 0 -3px var(--clr-grey-1);
  }

  .highlightMessage {
    font-family: "True Lies", sans-serif;
    font-size: 1.5rem;
  }

  img {
    width: 100%;
  }

  .picks_explanation {
    height: 3rem;
    width: auto;
    margin-bottom: 0.8rem;
  }
`;
export default Temp5Page;
