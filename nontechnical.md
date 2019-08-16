---
layout: page
title: Relating Two Perspectives on Integrable Systems
category: posts
permalink: /nontech/
---

Integrable systems are physical models; that is, models that describe motion or change in a physical system.
"Integrable" means that we can find exact solutions, allowing us to predict the future position of our system using a formula.
Many physical models don't have this property: they are too complex and too chaotic to write down an exact formula for the predictions.

Integrable models are interesting because even though many systems are not integrable, many are close to an integrable system, so studying the integrable systems can enable us to find good approximations to other models.
Furthermore, from a perspective of pure mathematical interest, the integrability tends to be a reflection of a fascinating symmetry underpinning the model.
For both of these reasons, studying these systems has often yielded surprising insights into other areas of mathematics as varied as probability and number theory.

### Changing variables and changing perspectives

Solving a problem in physics invariably comes down to finding the best coordinates -- the best perspective for viewing the system we are trying to describe.
Introductory students encounter this in answering the question of how to describe the motion of a block sliding down a ramp.
If we think of positions in the horizontal and the vertical, then we have to keep track of two different motions at once.
But the problem is made simple and the solution made clear by merely rotating the coordinates -- essentially tilting our heads to the side until the ramp looks horizontal.

What this simple example exposes is that our initial viewpoint as observers is not always the best way to look at the world.
Choosing an angle that centers the objects we are trying to study reveals the simplest way to think about the problem.
Even though we could choose to track the vertical and horizontal motion of the block separately, we are making more work for ourselves by doing so, because we are expanding a single motion into two.

### The Motion of Planets

Sometimes, the difference between the original coordinates
Imagine trying to describe the motion of a planet around the sun.
If we try to look from the outside and keep track of how each object is moving, we will be hopelessly lost, or at least badly confused.
We need to keep track of three coordinates, \\(x, y, z\\) for each of the two objects.
They are each pulling on one another in a direction that is constantly turning, and with a force that is constantly varying from stronger to weaker and back as the two bodies move closer and further apart.
There is so much to keep track of!

But if we let go of our fixed, outside perspective, we can greatly simplify the problem.
The planet does not "know" where it is from our outside perspective; all it can see is how far away the sun is, and in which direction it lies.
This means we can describe the motion of the system in terms of only these two things: a distance and a direction.
A single vector is enough to tell us how the planet and the sun revolve around one another.

But what if the best viewpoint on the system is not always the same?

### Two viewpoints for two situations

The two-body problem has a nice simplicity to it: regardless of the size of the planet and the sun, regardless of how near or far they begin or how fast each is moving, the coordinates that reveal the structure of the system are always the same.
The details may vary, but the overall picture never varies.
But many systems do not have this simplicity; the variety of possible solutions and behaviors is wider.
Perspectives that allow us to completely solve the equations in one situation may not even make sense to write down in another.

The integrable systems I study model waves, either in a fluid (such as water) or traveling through a crystal (where the wave takes the form of individual atoms pushing and pulling on one another).
These waves can travel in the form of an individual "pulse" moving through space, or as a repeating pattern that continually oscillates back and forth, repeating the same waveforms over and over -- called a periodic solution.
Of course, other waves can exist between these two extremes, but these extremes are the simplest to consider.

As you might expect, the best viewpoint for each of these is different.
When we are describing the motion of an individual pulse, we need to track how big the pulse is, how quickly it moves, and in what direction.
This means our coordinates point like an arrow through the space of possible wave pulses, telling us how our particular pulse moves.
In the other extreme, we keep track of how the wave repeats, so we need coordinates that cycle through the same positions; like a series of clocks that move at different speeds.
These clocks fall out of sync with one another immediately, but if we wait long enough, they eventually all circle back to the starting point

The goal of this program of research is to unify two of these seemingly disparate perspectives.
The basic idea of how to do this is to take a repeating wave and stretch it out longer and longer by pulling the peaks of the wave apart, until each peak looks just like a single pulse that is separated from all the others.
When we do this, we see the "clocks" expand so that each one takes longer to run all the way around.
As we go further and further, the fact that the motion is cyclical becomes less and less significant.
As a result, the motion looks less and less like a cycle and more like motion in a straight direction -- exactly the situation with the pulse waves!
So, we are able to interpret the coordinates of a pulse wave as being made up of a combination of the cyclical coordinates, stretched out to infinite length.
This gives us a way to better understand the system on both ends, by bringing insight from each method to bear on the other.