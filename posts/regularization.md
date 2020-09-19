---
layout: post
title: Regularization terms are just priors
category: posts
---

This is really simple, but I didn't realize it until embarrassingly recently. I'm not sure if it wasn't mentioned when I first learned about regularized linear models, or I just forgot about it, but until I watched Richard McElreath's lectures from his Statistical Rethinking course I didn't ever realized that the common regularization procedures for linear models can be interpreted as weakly informative priors on the model coefficients.

### Regularized linear models

To review: ordinary least squares regression takes the model

\\( y = \beta x + \varepsilon \\),

where \\( \varepsilon \sim \mathrm{Normal}(0, \sigma) \\), and estimates \\( \beta \\) by minimizing the loss function

\\( \mathcal L(\mu) = \sum_{i} (y_i - \beta x_i)^2 \\)

known as the sum of squared residuals. A common approach to minimizing overfitting in this model is to modify the loss function by adding a penalty term. Penalizing the \\(L^2\\) norm of the coefficients gives Tikhonov regularization, also known as ridge regression:

\\( \mathcal L(\mu) = \sum_{i} (y_i - \beta x_i)^2  + \lambda \beta^2 \\)

Penalizing the \\(L^1\\) norm instead gives a method called the LASSO:

\\( \mathcal L(\mu) = \sum_{i} (y_i - \beta x_i)^2 + \lambda |\beta|\\)

### Least squares is a maximum-likelihood estimate

So why do we minimize the sum of squared residuals? Really, it's just a maximum likelihood estimate, because if we take

\\(y_i \sim \mathrm{Normal}(\beta x_i, \sigma) \\)

then the joint likelihood given all the data is

\\( p(\mathbf{y} | \beta) = \frac{1}{Z} \exp\left( -\frac{1}{\sigma^2} \sum_{i} (y_i - \beta x_i)^2 \right)  \\)

which is obviously maximized when the sum of squared residuals is minimized. (This doesn't work with other GLMs in general, because the joint likelihood will be different.) However, if we think of this as a Bayesian model, we should put a prior on \\(\beta \\) besides the (improper) uniform prior. Let's go with something simple: a normal prior. Taking

\\( \beta \sim \mathrm{Normal}(0, \sigma_\beta) \\)

we get the posterior

\\( p(\beta | \mathbf{y}) \propto \exp\left( -\frac{1}{\sigma^2} \sum_i (y_i - \beta x_i)^2 - \frac{\beta^2}{\sigma_\beta^2} \right) \\)

and the loss function for Tikhonov regularization pops out, taking \\( \lambda = 1/\sigma_\beta^2 \\). The same trick, applied to an exponential prior on \\(|\beta|\\), yields the LASSO model. Conclusion: priors are regularization, and regularization is priors!