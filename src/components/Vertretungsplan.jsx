import { useEffect, useState } from "react";
import { format } from "date-fns";
// import classNames from 'classnames';
import axios from "axios";
const Vertretungsplan = () => {
  const [lessonsss, setLessonsss] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getLessonsss() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MSO_URL}${process.env.REACT_APP_USERID}`
        );
        setLessonsss(response.data);
      } catch (error) {
        setErrorMessage(error);
      }
    }
    getLessonsss();
  }, []);
  //         // const current = res.data.properties.timeseries[0].data.instant.details;
  //         // console.log(current);
  //         setVertretungsplan(response.data.coverLessons);
  //     }
  //     getVertretungsplan();
  // }, []);
  // useEffect();
  // return null;
  // };

  const renderLesson = (lesson) => {
    return (
      <tr key={lesson.id}>
        <td>{format(new Date(lesson.date), "d.M.Y")}</td>
        <td>{lesson.period}</td>
        <td>{lesson.covered_teacher}</td>
        <td>{lesson.teacher}</td>
        <td>{lesson.comment}</td>
      </tr>
    );
  };

  return (
    <>
      {/* <div>Der Vertretungsplan:</div> */}

      <div>
        {/* K's errorzeug: */}
        {!process.env.REACT_APP_USERID && (
          <p>
            Erstellen Sie eine Kopie von <pre>.env.sample</pre> namens{" "}
            <pre>.env</pre> und ersetzen Sie die UserID durch Ihre eigene. Um
            die zu finden, gehen Sie auf die MSO-App und klicken auf Ihrer Seite
            auf Ihren Namen. Das kopiert sie ins Clipboard.
          </p>
        )}

        {errorMessage && (
          <div>
            Fehler: <pre>{JSON.stringify(errorMessage, null, 4)}</pre>
          </div>
        )}

        {/* <pre style={{textAlign: 'left'}}>
                {JSON.stringify(lessonsss, null, 4)}
            </pre> */}

        {lessonsss && (
          <table className="ui single line table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Stunde</th>
                <th>Fällt aus</th>
                <th>Vertretung</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>{lessonsss.map((l) => renderLesson(l))}</tbody>
          </table>
        )}
      </div>
    </>
  );
};
// HA: Das alles zu ende mit K's script.
// Mit .env im Hauptverzeichnis die Keys rein packen, sodass diese geschützt sind. Und diese in gitignore reinpacken
//Mini Projekt mit API: https://covid19api.com API: https://api.covid19api.com
export default Vertretungsplan;

//HA von 2.11
//Todo app machen!!
//ins Array pushen
//Eement anklicken, dann wird gelöscht
