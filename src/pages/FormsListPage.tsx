import MainLayout from "../layout/MainLayout";

function FormsListPage() {
  return (
    <MainLayout>
      <main>
        <div className="flex flex-col justify-center items-center gap-5 text-center text-bossDark my-10">
          {/* Title */}
          <div className="text-4xl text-center font-bold xl:text-5xl">
            <h1 className="text-bossPinkStrong">¡Colabora con</h1>
            <h2 className="text-bossDark">The BossRoomVIP!</h2>
          </div>
          <div className="max-w-xl my-3 text-2xl">
            <p>Haz clic aquí para iniciar tu solicitud</p>
            <p className="text-5xl mt-3">👇🏼</p>
          </div>
          <div className="hover:bg-bossDark w-40 text-center text-white font-bold h-10 flex items-center justify-center rounded-lg bg-bossPinkStrong cursor-pointer hover:scale-110 transition-all duration-300">
            {/* <NavLink to="/registerform">Iniciar Registro</NavLink> */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeq0NqxwEw9G6H42YMnisXOYx2PMoGNTajqd-QY6RumjAkuOQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Registro
            </a>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default FormsListPage;
