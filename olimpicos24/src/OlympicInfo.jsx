import React from 'react';
import './OlympicInfo.css'; // Asegúrate de crear este archivo CSS

const OlympicInfo = () => {
  return (
    <div className="olympic-info">
      <h1>Juegos Olímpicos</h1>
      
      <section className="history">
        <h2>Breve Historia</h2>
        <p>Los Juegos Olímpicos modernos se iniciaron en 1896 en Atenas, Grecia, por iniciativa del barón Pierre de Coubertin. Desde entonces, se han celebrado cada cuatro años (con algunas excepciones debido a guerras mundiales) y han crecido hasta convertirse en el evento deportivo más grande del mundo.</p>
      </section>

      <section className="paris-2024">
        <h2>Juegos Olímpicos de París 2024</h2>
        <p>Los Juegos Olímpicos de Verano de 2024, oficialmente conocidos como los Juegos de la XXXIII Olimpiada, se celebrarán del 26 de julio al 11 de agosto de 2024 en París, Francia. Será la tercera vez que París albergue los Juegos Olímpicos, convirtiéndose en la segunda ciudad, después de Londres, en hacerlo.</p>
      </section>

      <section className="medal-table">
        <h2>Tabla de Medallería (Simulada)</h2>
        <table>
          <thead>
            <tr>
              <th>Posición</th>
              <th>País</th>
              <th>Oro</th>
              <th>Plata</th>
              <th>Bronce</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Estados Unidos</td>
              <td>39</td>
              <td>41</td>
              <td>33</td>
              <td>113</td>
            </tr>
            <tr>
              <td>2</td>
              <td>China</td>
              <td>38</td>
              <td>32</td>
              <td>18</td>
              <td>88</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Japón</td>
              <td>27</td>
              <td>14</td>
              <td>17</td>
              <td>58</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gran Bretaña</td>
              <td>22</td>
              <td>21</td>
              <td>22</td>
              <td>65</td>
            </tr>
            <tr>
              <td>5</td>
              <td>ROC</td>
              <td>20</td>
              <td>28</td>
              <td>23</td>
              <td>71</td>
            </tr>
          </tbody>
        </table>
        <p className="table-note">Los resultados reales de París 2024 pueden variar.</p>
      </section>

      <div className="olympic-logo">
        <img src="https://es.wikipedia.org/wiki/Archivo:2024_Summer_Olympics_text_logo.svg" alt="Logo París 2024" />
      </div>
    </div>
  );
};

export default OlympicInfo;