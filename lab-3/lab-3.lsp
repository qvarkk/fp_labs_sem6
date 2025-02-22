((lambda (ls)
   ((lambda (a b c)
      (cond ((= (+ a b) c) "+")
            ((= (- a b) c) "-")
            ((= (* a b) c) "*")
            ((= (/ a b) c) "/")
            (t "None")))
    (first ls) (second ls) (third ls)))
 '(1 2 3))


((lambda (ls)
   ((lambda (a b c)
      (if (= (+ a b) c) "+"
        (if (= (- a b) c) "-"
          (if (= (* a b) c) "*"
            (if (= (/ a b) c) "/"
              "None")))))
    (first ls) (second ls) (third ls)))
 '(1 2 3))