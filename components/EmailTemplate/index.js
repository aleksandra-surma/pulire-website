const EmailTemplate = ({ name, email, description }) => {
  return (
    <section className="email font-redHat">
      <div>
        <p>
          Autorem wiadomości jest: <u>{name}</u>
        </p>
        <br />
        <p>
          Podany przez nadawcę adres email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <br />
        <p>Treść wiadomości:</p>
        <p>{description}</p>
      </div>
      <br />
      <hr />
      <footer>
        <p>
          <i>Ta wiadomość została wysłana z formularza kontaktowego na stronie pulire.co</i>
        </p>
        <p>
          <i>Zachowaj ostrożność w stosunku do załączonych linków bądź treści.</i>
        </p>
      </footer>
    </section>
  );
};

export default EmailTemplate;
