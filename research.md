---
layout: page
title: Research
category: pages
permalink: /research/
---

This page is a brief summary of some of my current research.

For a non-technical description of my work on infinite-period limits of Floquet theory, [click here](https://mpdylan.github.io/research/nontech/).

## Discrete integrable systems

Discrete Schroedinger operators are integer-lattice discretization- of the familiar Schroedinger operator \\(Q = \partial^2 + q(x)\\) and can be regarded as finite or infinite tridiagonal matrices.
Half-line discrete Schroedinger operators are intimately connected with orthogonal polynomials on the real line, through the well-known three-term recurrence relation which is expressed as a tridiagonal matrix.
I am currently working to expand the algebrogeometric spectral theory of discrete Schrodinger operators and the integrable nonlinear lattice equations (such as the Toda lattice system) associated with them.

I am also interested in other discrete spectral problems, such as those associated with orthogonal polynomials on the unit circle and the Ablowitz-Ladik system of equations (which is a spatial discretization of the nonlinear Schroedinger system).

### Infinite-period limits of algebrogeometric theory

The initial-value problem for the Korteweg-de Vries equation for periodic or quasiperiodic initial data is solved by an algebrogeometric construction, where the role played by the transmission coefficient in the inverse scattering transform is played by a hyperelliptic Riemann surface.
In this setting, the nonlinear KdV flow is linearized on the Jacobian of this curve, and the inverse transform is mediated by theta functions.
In 1990, Ercolani and McKean used a limiting procedure to transfer this geometric interpretation to the scattering context.

The same limiting procedure can be applied in the case of discrete Schroedinger operators and orthogonal polynomials on the unit circle, with some complications due to the different form of the spectra of such operators.

Code for associated numerical calculations may be found in my repository [Floquet](https://github.com/mpdylan/Floquet/)

### Discrete Darboux transformations

The Darboux transformation is a method for producing, from an operator \\(Q = \partial^2 + q(x)\\) and a solution to the equation \\(Qf = \lambda f\\), a new operator \\(\tilde Q = \partial^2 + \tilde q(x)\\) and function \\(\tilde f\\) satisfying \\(\tilde Q \tilde f = \lambda \tilde f\\).
This transformation has gained recent attention for its ability to easily produce formulas for solutions to several soliton equations; the Lax equations associated to, for instance, the KdV equation are preserved under the Darboux transformation, so starting from a known solution to KdV one may apply the Darboux transformation and obtain a new solution to KdV.
Remarkably, even the trivial solution may be used as a starting point to construct nontrivial solutions, including the general multisoliton solution.

An analogue of this transformation also exists in the discrete Schroedinger operator setting, where it is known as a single commutation method, since the construction of the new operator is accomplished by factoring the initial operator into two first-order operators and permuting the factors.
In my dissertation I show that this single commutation may be made infinitesimal in a manner following the analogous procedure of McKean[^1] 


## Machine learning and OCR

Since 2017 I have been working (with Marek Rychlik, Yan Han, and Mohammed Moussa) on methods for information recovery, metadata and semantics generation by means of optical character recognition (OCR).
In particular, our work is concerned with developing methods for OCR which work on currently underserved languages (such as Persian and traditional Chinese) or information formats (such as mathematical or chemical formulas, or tabular data in scientific papers).
We are also interested in applying machine learning techniques to the OCR-processed information to extract metadata and semantic information in addition to the machine-readable text.
This will have immediate application at the University of Arizona, which due to an ongoing collaboration with the Afghanistan Center at Kabul University, currently houses one of the largest collections in the world of documents in the Pashto and Dari languages.
This collection is in the form of digitized, but not machine-readable (or searchable), documents.

[^1]:McKean, H. "Geometry of KdV(1): Additions and the Unimodular Spectral Class". *Revista Matematica Iberoamericana*, vol. 2, no. 3 (1986).
[^2]:Ercolani, N. and McKean, H. "Geometry of KdV(4): Abel sums, Jacobi variety, and theta function in the scattering case". *Inventiones Mathematicae*, vol. 99, pp. 483-544 (1990).
