# parcial-fe3

A 5 días de la entrega del parcial, me dedico a investigar cuales fueron los errores que tenía en el código que no se podían mostrar la página en el host.

1) En App.jsx solo debía renderizarse Form.jsx ya que el renderizado de Card.jsx era controlado por Form.jsx
2) No se había importado el useState en Form.jsx
3) Agregue la validacion que me faltó, de que no haya espacios en blanco al inicio del primer input de nombre.
4) En los input los value estaban mal llamados 
5) Los eventos en los input debían ser onChange. O de ser onBlur debía retirar los value.
