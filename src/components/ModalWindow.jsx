import { useEffect, useState } from "react";

function ModalWindow({ children }) {
  const [show, setShow] = useState(true);

  useEffect(() => {}, [show]);

  return show ? (
    <div className="overlay" onClick={() => setShow(!show)}>
      <div className="modal">
        <button className="modal-close-btn" onClick={() => setShow(!show)}>
          &#10006;
        </button>
        <p className="modal-text">{children}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

/**
 * <div style={styles.overlay} onClick={обработка нажатия и закрытие}> // это затемнение на весь экран // сделать так, чтобы модал не пропускал событие клика вниз до оверлея
 *  <div style={styles.modal}> // ставишь по центру
 *    {children}
 *  </div>
 * </div>
 */

export default ModalWindow;
