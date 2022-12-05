---
title: logs
---

5 dec - had to edit formula in column f to split by | instead of /
alternate instance of chapter numbering
1,1.1 gives 1 separated to 1 - 1
formulae in h and j:
`  =split(G386,"_") `
` =split(substitute(I386,"."," - "),",") `



1.1 gives 1 - 1 =>
AND split formula in column h changes:
` =split(substitute(G390,"."," - "),"_") `
and split formula in column j changes:
` =split(I390," - ") `


instance where verses have <p> tag instead of <l> tag