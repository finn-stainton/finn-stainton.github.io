# Algorithm Analysis

## Basic Analysis

## Recurrence Analysis

### Masters Theorem

Suppose $T(n)$ is given for $n \geq 1$ by the recurrence $T(n) = aT(n/b) + f(n)$ where $a \geq 1$ and $b > 1$ are constants, and $f(n)$ is some known function.

- If $f(n)$ is $O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon > 0$ then $T(n)$ is $\Theta({n^{\log_{b}a})}.$
- If $f(n)$ is $\Theta({n^{\log_{b}a}})$ then $T(n)$ is $\theta({n^{\log_{b}a}} \log_{b}n).$
- If $f(n)$ is $\ohm({n^{\log_{b}a+\epsilon}})$ for some constant $\epsilon > 0$ and if a $f(n/b) \geq r f(n)$ for some constant $r < 1$ and all large enough $n$ then $T(n)$ is $\theta(f(n)).$

Machine independent
