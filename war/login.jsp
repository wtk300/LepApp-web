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

    <form name="f" action="<c:url value='j_spring_security_check'/>" method="POST">
      <table>
        <tr><td>Uzytkownik:</td><td><input type='text' name='j_username' value='<c:if test="${not empty param.login_error}"><c:out value="${SPRING_SECURITY_LAST_USERNAME}"/></c:if>'/></td></tr>
        <tr><td>Haslo:</td><td><input type='password' name='j_password'></td></tr>
        <tr><td><input type="checkbox" name="_spring_security_remember_me"></td><td>Nie pytaj sie ponownie o haslo</td></tr>

        <tr><td colspan='2'><input name="submit" type="submit"></td></tr>
        <tr><td colspan='2'><input name="reset" type="reset"></td></tr>
      </table>

    </form>

  </body>
</html>
