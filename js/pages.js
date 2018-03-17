window.setPage = (function () {
    return {
        MainPage: function () {
            document.body.innerHTML = `
            <header>
                <a href="#" class="logo">
                    <div>
                        <div class="icon">
                            <img src="img/icon.png">
                        </div>
                        <span class="logoText">PhotoCloud</span>
                    </div>
                </a>
                <div class="addPhoto">
                    <a class="addButton" href="#">Добавить фото</a>
                </div>
                <div class="userName">
                    <div class="userNameShort"></div>
                    <div class="userNameFull"></div>
                    <a class="sign" href="#" onclick="setPage.LogInPage();">
                        <i class="fa fa-sign-in signicon2 fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
            </header>
            <div class="search">
                <div class="searchAuthorHashtag">
                    <input type="text" maxlength="50" placeholder="Автор" class="inputs">
                    <input type="text" maxlength="50" placeholder="Хэштеги" class="inputs">
                </div>
                <div class="searchDate">
                    <i class="fa fa-calendar fa-2x" aria-hidden="true"></i>
                    <div class="inputDate">
                        <input maxlength="20" type="date">
                    </div>
                </div>
                <button type="submit"></button>
            </div>
            <div class="content">

            </div>
            <button class="loadMoreButton" onclick="loadMore(this)">Загрузить еще</button>
            <footer>
                <div class="copyright">
                    <p>© 2018 PhotoCloud.by</p>
                    <p>Последние изменения:
                        <span class=footerText1>11.03.2018</span>
                    </p>
                    <p class="footerText2">20.03.2018</p>
                </div>
                <div class="editorInfo">
                    <p>Сидорова Яна</p>
                    <p>2 курс, 5 группа</p>
                    <p>jana.ru.sidorova@yandex.ru</p>
                </div>
            </footer>`;
            document.querySelector('html').style.height = 'auto';
            domModul.setContent();
            getPhotoPosts();
            return true;
        },
        AddPostPage: function () {

        },
        EditPostPage: function () {

        },
        LogInPage: function () {
            document.querySelector('html').style.height = '100%';
            document.querySelector('body').style.height = '100%';
            document.body.innerHTML = `
            <div class="main">
                <img src="img/icon.png" class="icon-link" onclick="setPage.MainPage();"/>
                <div class="input-block">
                    <div class="text-log-in"><span>ВХОД</span></div>
                    <input class="input-name" type="text" maxlength="50" placeholder="Логин">
                    <input class="input-password" type="password" maxlength="30" minlength="6" placeholder="Пароль">    
                    <div class="for-button">
                        <a href="">Вход</a>
                        <a href="">Регистрация</a>
                    </div>
                </div>
            </div>`;
            return true;
        }
    }
})();