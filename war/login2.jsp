<%@ taglib prefix='c' uri='http://java.sun.com/jstl/core_rt' %>

<html>
  <head>
    <meta charset="utf-8">
    <title>Login</title>
  </head>

  <body onload="document.f.j_username.focus();">
    
    <c:if test="${not empty param.login_error}">
      <font color="red">
        Your login attempt was not successful, try again.<br/><br/>
        
      </font>
    </c:if>

    
      <form id="loginForm" name="loginForm" action="j_spring_security_check" method="post">
            <table>
                <tr>
                    <td>Login</td><td><input id="usernameFiled" type="text" name="j_username"/></td>
                </tr>
                <tr>
                    <td>Hasło</td><td><input id="passwordField" type="password" name="j_password"/></td>
                </tr>
                <tr>
                    <td colspan="2" align="right"><input type="submit" value="Zaloguj"></td>
                </tr>
            </table>

        </form>

  </body>
</html>
