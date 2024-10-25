const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export const RenderTask = ({data}) => {
    return(
     <div className="task">
        <section className="datos">
            <section className="top">
            <div className="timeInfo">
                <p>{days[data.day]}</p>
                <p>{data.date}</p>
                <p>{data.hour}</p>
            </div>
            <section className="option">
                <div className="but" id="ok" onClick={ () => {
                  //Done function
                  alert('done');
                }}>✅</div>
                <div className="but" id="delete" onClick={() => {
                    alert('delete');
                }}>❌</div>
            </section>
            </section>
            <p className="content">{data.content}</p>
        </section>
    </div>)
};


