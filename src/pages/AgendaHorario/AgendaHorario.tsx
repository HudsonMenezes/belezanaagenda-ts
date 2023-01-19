import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

function AgendaHorario() {
  return (
    <div>
      <Header />
      <section className="container-fluid py-5 text-start bg-light">
        <div>
          <div>
            <h1 className="ps-3">2º passo</h1>
            <h3 className="ps-3 mb-5">Escolha seu Horário</h3>
          </div>
          <div className="container-fluid text-center">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-5">
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  08:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  09:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle ">
                  10:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  11:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  12:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  13:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  14:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  15:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  16:00
                </div>
              </div>
              <div className="col">
                <div className="p-3 bg-light-subtle rounded-4 border border-warning-subtle">
                  17:00
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button className="mt-3">Confirmar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgendaHorario;
