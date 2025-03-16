>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        What challenges are you looking to solve?
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current challenges and what you're hoping to achieve with AI automation..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <CalendarClock className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-md sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">What to Expect</h3>

                  <ul className="space-y-4">
                    {[
                      "15-minute focused consultation",
                      "Assessment of your automation needs",
                      "Custom solution recommendation",
                      "Clear pricing information",
                      "Implementation timeline",
                      "No pressure or obligation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium mb-2">
                      Limited Availability
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We only take on 5 new clients per month to ensure the
                      highest quality service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
