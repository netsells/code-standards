# Pull Request Labelling

When you open a Pull Request, two labels will be automatically applied for you:

* A label indicating the size of the PR, based on lines changed
* A label indicating the type of PR, based on the branch you're asking to merge from

In addition, you **must** add the following labels if appropriate:

* `critical` if the PR must be addressed urgently
* `sanity-check` if the code included in this PR has already been reviewed
    * e.g. An `epic/* -> develop` PR
* `deployment` if this PR will upload a new production build
    * Should only be used on `release/* -> master` PRs

Additionally, if you have started to review a large PR, you can add an `in-progress` label to ensure someone else doesn't also start a review.